"use client";

import { useFeatureCardGlow } from "@/hooks/useFeatureCardGlow";
import { featureIcons } from "@/components/icons";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  iconIndex: number;
  title: string;
  description: string;
}

export function FeatureCard({ iconIndex, title, description }: FeatureCardProps) {
  const ref = useFeatureCardGlow();
  const Icon = featureIcons[iconIndex];

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.icon}>
        <Icon size={32} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
