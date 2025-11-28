import React from 'react';
import { X, ShieldAlert } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all animate-fadeIn max-h-[90vh] flex flex-col">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-2 text-slate-800">
            <ShieldAlert className="text-orange-500" />
            <h3 className="text-lg font-bold">免责声明 (Disclaimer)</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-slate-600 space-y-4 text-sm leading-relaxed">
          <p className="font-bold text-slate-800">请在使用“外贸人工具网 (TradeNavi)”前仔细阅读以下条款：</p>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-700">1. 内容说明</h4>
            <p>本网站仅提供导航服务。所有收录的网站链接均为第三方网站，本站仅提供链接指向，不对第三方网站的内容、安全性负责。</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-700">2. 使用风险</h4>
            <p>用户使用本站链接访问第三方网站时，应自行判断其内容的真实性和安全性。因使用第三方工具产生的任何纠纷，本站不承担任何法律责任。</p>
          </div>
          <div className="pt-4 border-t border-slate-100 mt-4">
            <p className="text-xs text-slate-400">最终解释权归 TradeNavi 所有。</p>
          </div>
        </div>
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end flex-shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            我已阅读并知晓
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;