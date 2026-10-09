export interface ICategory {
  scrapable: boolean;
  slug: string;
  title: string;
  topicId: null;
  url: string;
}

export interface INews {
      id: string;
      title: string;
      description: string;
      link: string;
      imageUrl: string;
      imageAlt: string;
      category: string;
      type: string;
      isLive: boolean;
      firstPublished: string;
      lastPublished: string;
      source: string;
    }
