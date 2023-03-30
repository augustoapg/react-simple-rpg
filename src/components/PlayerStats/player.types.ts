export interface Stats {
  hp: StatItem;
  attack: StatItem;
  defense: StatItem;
  mana: StatItem;
}

export interface StatItem {
  label: string;
  value: number;
}
