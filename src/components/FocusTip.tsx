import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const tips = [
  "🤖 Minimize context switching. Focus on one task at a time.",
  "💡 Work in 25-minute sprints. Rest briefly after each.",
  "📵 Turn off notifications. Your future self will thank you.",
  "📈 Focus on progress, not perfection.",
  "🧠 Small wins lead to big breakthroughs. Stay consistent.",
  "⌛ Timebox your tasks to avoid overthinking.",
  "🌿 Take a 2-minute break every 30 minutes to reset your brain.",
  "🔕 Mute distractions. Deep work yields deep results.",
  "🧘‍♂️ Calm mind, sharp code. Breathe before debugging.",
];

const getRandomTip = () => {
  const index = Math.floor(Math.random() * tips.length);
  return tips[index];
};

const FocusTip: React.FC = () => {
  const [tip, setTip] = useState<string>("");

  useEffect(() => {
    setTip(getRandomTip());
  }, []);

  return (
    <div
      className={classNames(
        "bg-indigo-50 border border-indigo-200 text-indigo-800",
        "rounded-md px-4 py-2 text-sm shadow-sm"
      )}
    >
      <span className="font-medium">Focus Tip:</span> {tip}
    </div>
  );
};

export default FocusTip;
