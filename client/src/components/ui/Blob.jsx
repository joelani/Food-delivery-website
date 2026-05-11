export default function Blob({ size = 120, color = "#6366f1", opacity = 0.75, className }) {
  const r = size / 2;
  const d = `M${r * 0.85},${r * -0.4}
    C${r * 1.1},${r * -0.1} ${r * 1.15},${r * 0.35} ${r * 0.9},${r * 0.6}
    C${r * 0.65},${r * 0.9} ${r * 0.2},${r * 1.05} ${r * -0.15},${r * 0.85}
    C${r * -0.5},${r * 0.65} ${r * -0.9},${r * 0.3} ${r * -0.85},${r * -0.1}
    C${r * -0.8},${r * -0.5} ${r * -0.4},${r * -0.9} ${r * 0.05},${r * -0.85}
    C${r * 0.4},${r * -0.8} ${r * 0.65},${r * -0.65} ${r * 0.85},${r * -0.4}Z`;

  return (
    <svg className={className}
      width={size}
      height={size}
      viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={d} fill={color} opacity={opacity} />
    </svg>
  );
};