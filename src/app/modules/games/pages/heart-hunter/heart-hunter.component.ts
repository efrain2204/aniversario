import { Component } from '@angular/core';

@Component({
  selector: 'app-heart-hunter',
  templateUrl: './heart-hunter.component.html',
  styleUrls: ['./heart-hunter.component.scss']
})
export class HeartHunterComponent {
  score = 0;
  emojis: { char: string; top: number; left: number; duration: number }[] = [];
  interval!: any;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.interval = setInterval(() => {
      this.addEmoji();
    }, 1000);
  }

  addEmoji() {
    const isHeart = Math.random() < 0.4; // 40% chance to spawn a heart
    const duration = Math.max(2 - this.score * 0.02, 0.5); // Shorter duration as score increases
    this.emojis.push({
      char: isHeart ? '❤️' : this.getRandomEmoji(),
      top: Math.random() * 350,
      left: Math.random() * 250,
      duration,
    });

    // Remove emoji after its duration
    setTimeout(() => {
      this.emojis.shift();
    }, duration * 1000);
  }

  onEmojiClick(index: number, emoji: { char: string }) {
    if (emoji.char === '❤️') {
      this.score++;
    }
    this.emojis.splice(index, 1);
  }

  getRandomEmoji() {
    const emojiList = ['😀', '🌟', '🍎', '🔥', '🎵', '🌸', '🍀'];
    return emojiList[Math.floor(Math.random() * emojiList.length)];
  }

  endGame() {
    clearInterval(this.interval);
    localStorage.setItem('score', String(this.score));
    window.location.href = '/score';
  }
}
