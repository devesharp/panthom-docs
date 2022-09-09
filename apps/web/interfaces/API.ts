export interface API {
  menu: {
     group: string;
    items: {
      name: string;
      path: string;
      description: string;
      method: string;
    }[]
  }[];
  sections: {
    group: string,
    description: string,
    routes: {
      method: string,
      name: string,
      description: string,
      path: string,
      requestBody: string,
    }[]
  }[]
}
