export interface PlaylistItems {
  kind: string;
  etag: string;
  nextPageToken: string;
  items: Item[];
  pageInfo: PageInfo;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface Item {
  kind: string;
  etag: string;
  id: string;
  contentDetails: ContentDetails;
}

interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}
