export interface ErrorResponse {
  error: string;
}

export interface Params {
  [key: string]: string | number | undefined;
}

export interface PaginationParams extends Params {
  per_page?: number;
  page?: number;
}

export interface VideoFilterParams extends Params {
  min_width?: number;
  max_width?: number;
  min_duration?: number;
  max_duration?: number;
}

interface PaginationObject {
  url?: string;
  page: number;
  per_page: number;
  next_page: number;
}

export interface Photo {
  farm: number;
  secret: string;
  server: string;
  id: number;
  width: number;
  height: number;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  url: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  alt: string | undefined;
  title: string;
  avg_color: string | null;
  owner: string;
  photographer: string;
  photographerUrl: string;
  photographer_url: string;
  photographer_id: number;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
  liked: boolean;
}

export interface Photos extends PaginationObject {
  photos: Photo[];
}

export type PhotosWithTotalResults = Photos & { total_results: number };

export interface Video {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  full_res: unknown;
  tags: unknown[];
  duration: number;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: {
    id: number;
    quality: "hd" | "sd" | "hls"; // TODO: find out all types
    file_type: "string";
    width: number | null;
    height: number | null;
    link: string;
    fps: number | null;
  }[];
  video_pictures: {
    id: number;
    picture: string;
    nr: number;
  }[];
}

export type Videos = PaginationObject & {
  total_results: number;
  videos: Video[];
};

export type Medium = Photo | Video;

export interface Collection {
  id: string;
  title: string;
  description: string | null;
  private: boolean;
  media_count: number;
  photos_count: number;
  videos_count: number;
}

export interface PhotoSite {
  id: number;
  included: boolean;
  name: string;
  site_url: string;
  description: string;
  api_status: string;
  api_documentation_link: string;
  api_key_required: boolean;
  registration_required: boolean;
  logo_image: string;
  notes: string;
}