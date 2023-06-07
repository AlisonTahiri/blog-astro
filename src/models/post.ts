export type Post = {
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;

    categories: {
      data: {
        attributes: {
          name: string;
        };
      }[];
    };
    content: string;
    cover: {
      data: {
        id: string;
        attributes: {
          url: string;
          width: string;
          height: string;
        };
      };
    };
  };
};
