import React, { useState, useMemo } from 'react';
import { Search, Menu, MessageSquare, BookOpen, PlusCircle } from 'lucide-react';
import Sidebar from './Sidebar';
import ToolCard from './ToolCard';
import SubmissionModal from './SubmissionModal';
import { CATEGORIES } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CATEGORIES[0].id);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(CATEGORIES[0].subCategories[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.id === selectedCategoryId) || CATEGORIES[0], 
  [selectedCategoryId]);

  const handleNavigation = (categoryId: string, subCategoryId?: string) => {
    setSelectedCategoryId(categoryId);
    if (subCategoryId) {
      setActiveSubTab(subCategoryId);
    } else {
      if (categoryId !== selectedCategoryId) {
        const cat = CATEGORIES.find(c => c.id === categoryId);
        if (cat && cat.subCategories.length > 0) {
          setActiveSubTab(cat.subCategories[0].id);
        } else {
          setActiveSubTab(null);
        }
      }
    }
  };

  const filteredContent = useMemo(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results: { categoryName: string; tools: any[] }[] = [];
      CATEGORIES.forEach(cat => {
        const matchingTools: any[] = [];
        cat.subCategories.forEach(sub => {
          sub.tools.forEach(tool => {
            if (tool.title.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query)) {
              matchingTools.push(tool);
            }
          });
        });
        if (matchingTools.length > 0) {
          results.push({ categoryName: cat.title, tools: matchingTools });
        }
      });
      return results;
    }
    return activeCategory;
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      <Sidebar 
        categories={CATEGORIES} 
        selectedCategoryId={selectedCategoryId}
        activeSubTab={activeSubTab}
        onNavigate={handleNavigation}
        isMobileOpen={isMobileSidebarOpen}
        closeMobileSidebar={() => setIsMobileSidebarOpen(false)}
      />

      <SubmissionModal isOpen={isSubmissionModalOpen} onClose={() => setIsSubmissionModalOpen(false)} />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="bg-white h-16 border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 flex-shrink-0 z-30">
          <div className="flex items-center gap-4 w-full max-w-2xl">
            <button 
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
            >
              <Menu size={20} />
            </button>
            <div className="relative flex-1 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="搜索工具、插件、教程..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all sm:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-sm font-medium text-slate-600">
             <button 
              onClick={() => setIsSubmissionModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200"
            >
              <PlusCircle size={16} /> 
              <span>投稿/收录</span>
            </button>
            <div className="w-px h-4 bg-slate-200 mx-1"></div>
            <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
              <MessageSquare size={16} /> 外贸问答圈
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
              <BookOpen size={16} /> 资料下载
            </a>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-8 min-h-[calc(100vh-12rem)]">
            {searchQuery ? (
               <div>
                 <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                   <Search size={24} className="text-primary" />
                   搜索结果: "{searchQuery}"
                 </h2>
                 {(filteredContent as any[]).length === 0 ? (
                   <div className="text-center py-20 text-slate-400">
                     <p>未找到相关工具</p>
                     <button 
                      onClick={() => setIsSubmissionModalOpen(true)}
                      className="mt-4 text-primary hover:underline"
                     >
                       知道这个工具？点击投稿
                     </button>
                   </div>
                 ) : (
                   (filteredContent as any[]).map((group, idx) => (
                     <div key={idx} className="mb-8">
                       <h3 className="text-lg font-semibold text-slate-700 mb-4 px-1 border-l-4 border-slate-200 pl-3">
                         来自: {group.categoryName}
                       </h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                         {group.tools.map((tool: any) => (
                           <ToolCard key={tool.id} tool={tool} />
                         ))}
                       </div>
                     </div>
                   ))
                 )}
               </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  {React.createElement((filteredContent as Category).icon, { className: "w-8 h-8 text-primary" })}
                  <h1 className="text-2xl font-bold text-slate-800">{(filteredContent as Category).title}</h1>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl border border-slate-100 shadow-sm w-fit">
                  {(filteredContent as Category).subCategories.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubTab(sub.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeSubTab === sub.id
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-transparent text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>

                {(filteredContent as Category).subCategories.map((sub) => {
                  if (activeSubTab && activeSubTab !== sub.id) return null;
                  return (
                    <div key={sub.id} className="animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {sub.tools.map((tool) => (
                          <ToolCard key={tool.id} tool={tool} />
                        ))}
                        <button 
                          onClick={() => setIsSubmissionModalOpen(true)}
                          className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-primary/50 hover:bg-slate-50 transition-all group h-full min-h-[100px]"
                        >
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary mb-2 transition-colors">
                            <PlusCircle size={20} />
                          </div>
                          <span className="text-xs font-medium text-slate-400 group-hover:text-primary">推荐新工具</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm pb-8">
              <p>© 2024 TradeNavi 外贸人工具导航. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
