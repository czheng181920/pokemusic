declare module 'spotify-preview-finder' {
  type PreviewResult = {
    name: string; // Song name with artist(s)
    spotifyUrl: string;
    previewUrls: string[];
  };

  type PreviewResponse =
    | {
        success: true;
        results: PreviewResult[];
      }
    | {
        success: false;
        error: string;
      };

  function spotifyPreviewFinder(
    songName: string,
    limit?: number
  ): Promise<PreviewResponse>;

  export default spotifyPreviewFinder;
}
