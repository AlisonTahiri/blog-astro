export type Post = {
  attributes: {
    title: string;
    slug: string;
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
