import path from 'path';
import yaml from 'js-yaml';
import { promises as fs } from 'fs';
import { API } from '../../interfaces/API';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd());
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/swagger.yml',
    'utf8'
  );
  const swagger = yaml.load(fileContents);
  const response: Partial<API> = {};

  /**
   * Generate menu
   */
  const menu: {[key: string]: API['menu'][0]|any } = {};
  Object.entries(swagger.paths).map(([key, value]) => {
    Object.entries(value).map(([key2, value2]) => {
      value2.tags.map((tag) => {
        const tagName = tag?.name ?? tag;

        if (!menu[tagName]) {
          menu[tagName] = {
            'group': tagName,
            'items': []
          };
        }

        menu[tagName].items.push({
          name: value2.summary,
          path: key,
          description: value2.description,
          method: key2,
        });
      });
    });
  });
  response.menu = Object.entries(menu).map(([key, v]) => v);

  const routes: {[key: string]: API['sections'][0]|any } = {};

  Object.entries(swagger.paths).map(([path, value]) => {
    Object.entries(value).map(([method, value2]) => {
      value2.tags.map((tag) => {
        const tagName = tag?.name ?? tag;

        if (!routes[tagName]) {
          routes[tagName] = {
            'group': tagName,
            'description': tag?.description ?? '',
            routes: []
          };
        }

        routes[tagName].routes.push({
          method: method,
          name: value2.summary,
          description: value2.description,
          path: path,
          requestBody: value2.requestBody,
        });
      });
    });
  });

  response.sections = Object.entries(routes).map(([key, v]) => v);

  res.status(200).json(response);
}
