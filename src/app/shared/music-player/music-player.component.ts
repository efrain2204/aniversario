import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'music-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit{
  songs = [
    { title: 'Hello', url: 'assets/sounds/songs/Hello.mp3' },
    { title: 'Some like you', url: 'assets/sounds/songs/SomeoneLikeYou.mp3' },
    { title: 'Todos me miran', url: 'assets/sounds/songs/TodosMeMiran.mp3' },
  ];

  currentSongIndex = 0;
  isPlaying = false;
  audio: HTMLAudioElement = new Audio(this.songs[this.currentSongIndex].url);

  ngOnInit(): void {
    this.loadSong();
    this.audio.addEventListener('ended', this.nextSong.bind(this)); // Avanza a la siguiente canción al terminar
  }
  loadSong(): void {
    this.audio.src = this.songs[this.currentSongIndex].url;
    this.audio.load();
  }

  get currentSong() {
    return this.songs[this.currentSongIndex];
  }

  playPause() {
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  nextSong() {
    // Pausar la canción actual antes de cambiar
    this.audio.pause();
    this.audio.currentTime = 0; // Reiniciar el tiempo a 0

    // Cambiar a la siguiente canción
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    // this.audio = new Audio(this.songs[this.currentSongIndex].url);
    this.loadSong()

    // Reproducir la nueva canción si estaba en reproducción
    if (this.isPlaying) {
      this.audio.play();
    }
  }
}
