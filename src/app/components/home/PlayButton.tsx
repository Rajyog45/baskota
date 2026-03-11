interface PlayButtonProps {
  href: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center"
    >
      {/* Play Icon */}
      <span className="relative z-10 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform">
        ▶
      </span>
    </a>
  );
};

export default PlayButton;
