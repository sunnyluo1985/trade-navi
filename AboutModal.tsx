import React from 'react';
import { X, Info, Heart, Mail } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-fadeIn">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2 text-slate-800">
            <Info className="text-primary" />
            <h3 className="text-lg font-bold">关于本站</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-4 text-slate-600">
          <p>
            <strong>TradeNavi</strong> 是一个专为外贸人、跨境电商卖家打造的免费工具导航站。我们致力于收集全网最实用、最高效的工具，帮助大家提升工作效率，降低信息差。
          </p>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Heart size={16} /> 初衷
            </h4>
            <p className="text-sm text-blue-700">
              做外贸常常需要用到各种工具：算柜、查税率、找邮箱、翻译、AI写信... 即使是老外贸人，收藏夹也经常乱糟糟的。所以我们做了这个网站，整理归纳，方便大家一键直达。
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Mail size={16} /> 联系与合作
            </h4>
            <p className="text-sm">
              如果您发现链接失效，或者有更好的工具推荐，欢迎点击首页顶部的“投稿”按钮，或者发送邮件至：
              <a href="mailto:support@tradenavi.com" className="text-primary hover:underline ml-1">support@tradenavi.com</a>
            </p>
          </div>
        </div>
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400">
          Build with ❤️ for Global Trade
        </div>
      </div>
    </div>
  );
};

export default AboutModal;