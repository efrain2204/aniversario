import { Component } from '@angular/core';
import {GamesCoreService} from "../services/games-core.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/service/auth.service";

interface ChecklistItem {
  id: number;
  text: string;
  emoji: string;
  day: number;
  completed: boolean;
}

@Component({
  selector: 'app-dashboard-games',
  templateUrl: './dashboard-games.component.html',
  styleUrls: ['./dashboard-games.component.scss']
})
export class DashboardGamesComponent {
  showChecklist = false;
  newItemText = '';
  selectedDay = 1;

  defaultItems: ChecklistItem[] = [
    { id: 1, text: 'Visitar la Plaza de Armas de Cusco', emoji: '🏛️', day: 1, completed: false },
    { id: 2, text: 'Recorrir el barrio de San Blas', emoji: '🎨', day: 1, completed: false },
    { id: 3, text: 'Visitar el Templo del Qorikancha', emoji: '☀️', day: 1, completed: false },
    { id: 4, text: 'Probar cevichocho cusqueño', emoji: '🍲', day: 1, completed: false },
    { id: 5, text: 'Tomar mate de coca', emoji: '🍵', day: 1, completed: false },
    { id: 6, text: 'Visitar Sacsayhuamán', emoji: '🪨', day: 2, completed: false },
    { id: 7, text: 'Explorar Mercado de San Pedro', emoji: '🛒', day: 2, completed: false },
    { id: 8, text: 'Visitar Museo de Arte Precolombino', emoji: '🏺', day: 2, completed: false },
    { id: 9, text: 'Cena con vista a la Plaza de Armas', emoji: '🌃', day: 2, completed: false },
    { id: 10, text: 'Viaje al Valle Sagrado', emoji: '🏔️', day: 3, completed: false },
    { id: 11, text: 'Visitar Pisac y su mercado', emoji: '🎭', day: 3, completed: false },
    { id: 12, text: 'Explorar Ollantaytambo', emoji: '🏰', day: 3, completed: false },
    { id: 13, text: 'Tomar el tren a Aguas Calientes', emoji: '🚂', day: 3, completed: false },
    { id: 14, text: 'Entrar a Machu Picchu al amanecer', emoji: '🌅', day: 4, completed: false },
    { id: 15, text: 'Foto en la puerta del Guardián', emoji: '📸', day: 4, completed: false },
    { id: 16, text: 'Subir al Huayna Picchu', emoji: '⛰️', day: 4, completed: false },
    { id: 17, text: 'Visitar la Puerta del Sol (Intipunku)', emoji: '🚪', day: 4, completed: false },
    { id: 18, text: 'Tomar foto con las llamas', emoji: '🦙', day: 4, completed: false },
    { id: 19, text: 'Comprar recuerdo en Aguas Calientes', emoji: '🎁', day: 4, completed: false },
    { id: 20, text: 'Despedida del viaje con abrazo en Machu Picchu', emoji: '💕', day: 4, completed: false },
  ];

  checklistItems: ChecklistItem[] = [];
  nextId = 21;

  constructor(
    public coreGame:GamesCoreService,
    private router:Router,
    private authService: AuthService,
  ) {
    this.checklistItems = [...this.defaultItems];
  }

  redirectPage(){
    this.authService.allowAccess = true;
    this.router.navigate(['/dashboard']);
  }

  back(){
    this.router.navigate(['/auth']);
  }

  toggleChecklist() {
    this.showChecklist = !this.showChecklist;
  }

  toggleItem(item: ChecklistItem) {
    item.completed = !item.completed;
  }

  addItem() {
    if (this.newItemText.trim()) {
      this.checklistItems.push({
        id: this.nextId++,
        text: this.newItemText.trim(),
        emoji: '✨',
        day: this.selectedDay,
        completed: false
      });
      this.newItemText = '';
    }
  }

  removeItem(item: ChecklistItem) {
    this.checklistItems = this.checklistItems.filter(i => i.id !== item.id);
  }

  getItemsByDay(day: number): ChecklistItem[] {
    return this.checklistItems.filter(item => item.day === day);
  }

  getProgressByDay(day: number): number {
    const items = this.getItemsByDay(day);
    if (items.length === 0) return 0;
    const completed = items.filter(i => i.completed).length;
    return Math.round((completed / items.length) * 100);
  }

  getTotalProgress(): number {
    if (this.checklistItems.length === 0) return 0;
    const completed = this.checklistItems.filter(i => i.completed).length;
    return Math.round((completed / this.checklistItems.length) * 100);
  }

  getDayEmoji(day: number): string {
    const emojis = ['🌄', '🏛️', '🚂', '🌅'];
    return emojis[day - 1] || '🎒';
  }

  getDayName(day: number): string {
    const names = ['Día 1: Cusco Ciudad', 'Día 2: Historia y Cultura', 'Día 3: Valle Sagrado', 'Día 4: Machu Picchu'];
    return names[day - 1] || `Día ${day}`;
  }
}
