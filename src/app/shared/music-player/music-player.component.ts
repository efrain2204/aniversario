import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Song {
  title: string;
  url: string;
}

@Component({
  selector: 'music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit, OnDestroy {
  songs: Song[] = [
    { title: 'kimetzu!!!', url: 'assets/sounds/songs/kimetsu.mp3' },
    { title: 'chofi', url: 'assets/sounds/songs/chofi.mp3' },
    { title: 'vuelve', url: 'assets/sounds/songs/vuelve.mp3' },
    { title: 'busca', url: 'assets/sounds/songs/busca.mp3' },
    { title: 'besos', url: 'assets/sounds/songs/besos.mp3' },
  ];

  currentSongIndex = 0;
  isPlaying = false;
  isExpanded = false;
  showPlaylist = false;
  currentTime = 0;
  duration = 0;
  volume = 0.7;

  private audio: HTMLAudioElement = new Audio();

  get currentSong(): Song {
    return this.songs[this.currentSongIndex];
  }

  get progressPercent(): number {
    return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
  }

  get formattedCurrentTime(): string {
    const mins = Math.floor(this.currentTime / 60);
    const secs = Math.floor(this.currentTime % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  get formattedDuration(): string {
    const mins = Math.floor(this.duration / 60);
    const secs = Math.floor(this.duration % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  ngOnInit(): void {
    this.audio.volume = this.volume;
    this.audio.src = this.songs[this.currentSongIndex].url;
    this.audio.addEventListener('ended', () => this.nextSong());
    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
    });
    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
    });
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio.src = '';
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    if (!this.isExpanded) {
      this.showPlaylist = false;
    }
  }

  playPause(): void {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  nextSong(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.audio.src = this.songs[this.currentSongIndex].url;
    this.audio.load();
    this.audio.play();
    this.isPlaying = true;
  }

  prevSong(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.audio.src = this.songs[this.currentSongIndex].url;
    this.audio.load();
    this.audio.play();
    this.isPlaying = true;
  }

  selectSong(index: number): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
    this.currentSongIndex = index;
    this.showPlaylist = false;
    this.audio.src = this.songs[this.currentSongIndex].url;
    this.audio.load();
    this.audio.play();
    this.isPlaying = true;
  }

  onSeek(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.audio.currentTime = parseFloat(target.value);
  }

  onVolumeChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.volume = parseFloat(target.value);
    this.audio.volume = this.volume;
  }

  togglePlaylist(): void {
    this.showPlaylist = !this.showPlaylist;
  }
}
