export class ImageManager {
  private images: string[] = [];

  constructor(urlArray: string[]) {
    this.images = urlArray;
  }

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }

  addOneImage(url: string): void {
    this.images.push(url);
  }

  addAllImages(urlArray: string[]): void {
    this.images = urlArray;
  }

  getAllImages(): string[] {
    return this.images;
  }
}
