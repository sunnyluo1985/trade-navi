import React, { useState } from 'react';
import { X, Send, Github, Mail } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    category: CATEGORIES[0].id
  });

  if (!isOpen) return null;

  const handleSubmit = (method: 'github' | 'email') => {
    const subject = `[新工具投稿] ${formData.title}`;
    const body = `
我想推荐这个工具被收录：

- **工具名称**: ${formData.title}
- **工具链接**: ${formData.url}
- **所属分类**: ${CATEGORIES.find(c => c.id === formData.category)?.title}
- **推荐理由**: ${formData.description}
    `;

    if (method === 'github') {
      const repoUrl = "your-username/trade-tools"; 
      const issueUrl = `https://github.com/${repoUrl}/issues/new?title=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(issueUrl, '_blank');
    } else {
      const email = "your-email@example.com";
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl, '_blank');
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-fadeIn">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h3 className="text-lg font-bold text-slate-800">推荐好用的外贸工具</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">工具名称</label>
            <input 
              type="text"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="例如：DeepSeek"
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">工具链接 (URL)</label>
            <input 
              type="url"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              placeholder="https://..."
              value={formData.url}
              onChange={e => setFormData({...formData, url: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">所属分类</label>
            <select 
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
              value={formData.category}
              onChange={e => setFormData({...formData, category: e.target.value})}
            >
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">推荐理由 / 简介</label>
            <textarea 
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all h-24 resize-none"
              placeholder="简单介绍一下这个工具的主要功能..."
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>
        </div>
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex gap-3">
          <button 
            onClick={() => handleSubmit('email')}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Mail size={16} />
            邮件投稿
          </button>
          <button 
            onClick={() => handleSubmit('github')}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            <Github size={16} />
            GitHub 提交
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;
