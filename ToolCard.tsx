import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [imageError, setImageError] = useState(false);

  // Helper to extract domain
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return '';
    }
  };

  const domain = getDomain(tool.url);
  // 使用 Google 的高清图标服务，这对 "外贸" 属性的网站来说是最佳选择 (清晰度高，覆盖全)
  // 如果用户网络环境无法访问 Google，会自动降级显示下方的多彩字母头像
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  // 根据工具名称生成一个固定的背景色，让界面看起来丰富多彩
  const getPlaceholderColor = (str: string) => {
    const colors = [
      'bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 
      'bg-amber-500', 'bg-rose-500', 'bg-cyan-500', 
      'bg-indigo-500', 'bg-fuchsia-500'
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <a 
      href={tool.url}
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative flex items-start p-4 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer h-full"
    >
      {/* Icon Area */}
      <div className={`flex-shrink-0 w-10 h-10 mr-3 rounded-lg flex items-center justify-center overflow-hidden transition-colors ${!imageError ? 'bg-white p-0.5 border border-slate-100' : `${getPlaceholderColor(tool.title)} border-none shadow-sm`}`}>
        {!imageError ? (
          <img 
            src={tool.iconUrl || faviconUrl} 
            alt={tool.title} 
            className="w-full h-full object-contain rounded-md"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <span className="text-white font-bold text-lg select-none">
            {tool.title.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold text-slate-800 truncate group-hover:text-primary transition-colors">
            {tool.title}
          </h3>
          {/* External Link Icon appears on hover */}
          <ExternalLink size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
        </div>
        
        {/* Badges */}
        {tool.badge && (
          <div className="mt-1 mb-1">
             <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded border border-blue-100">
              {tool.badge}
            </span>
          </div>
        )}

        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed group-hover:text-slate-600">
          {tool.description}
        </p>
      </div>
    </a>
  );
};

export default ToolCard;