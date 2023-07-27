export interface Blog {
  id: number;
  title: string;
  detail: string;
  thumbnail: string;
  tags?: number[];
}

export interface BlogResponse {
  data: Blog[] | undefined;
}

export interface BlogDetail extends Blog {
  text: string;
  image?: string;
  tags?: number[];
}

export interface BlogDetailResponse {
  data: BlogDetail | undefined;
}

export interface Tag {
  id: number;
  name: string;
}

export interface TagsResponse {
  data: Tag[] | undefined;
}
