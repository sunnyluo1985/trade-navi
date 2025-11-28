import React, { useState, useMemo } from 'react';
import { Search, Menu, MessageSquare, BookOpen, PlusCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import SubmissionModal from './components/SubmissionModal';
import DisclaimerModal from './components/DisclaimerModal';
import { CATEGORIES } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CATEGORIES[0].id);
  // Initialize with the first sub-category of the first category
  const [activeSubTab, setActiveSubTab] = useState<string | null>(CATEGORIES[0].subCategories[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  // Derived state for the currently active category object
  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.id === selectedCategoryId) || CATEGORIES[0], 
  [selectedCategoryId]);

  // Unified navigation handler
  const handleNavigation = (categoryId: string, subCategoryId?: string) => {
    setSelectedCategoryId(categoryId);
    
    if (subCategoryId) {
      // If a specific sub-category is requested (e.g. from Sidebar child click)
      setActiveSubTab(subCategoryId);
    } else {
      // If only category is clicked, default to the first sub-category if available
      // But only if we are switching categories. If clicking same category, keep current tab? 
      // Usually clicking parent resets to default or toggles expand. 
      // Here we check if we are switching categories to reset default.
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

  // Filtering Logic
  const filteredContent = useMemo(() => {
    // 1. If Searching, return a flat list of matching subcategories/tools from ALL categories
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

    // 2. If not searching, return structure for the active Category
    return activeCategory;
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <Sidebar 
        categories={CATEGORIES} 
        selectedCategoryId={selectedCategoryId}
        activeSubTab={activeSubTab}
        onNavigate={handleNavigation}
        isMobileOpen={isMobileSidebarOpen}
        closeMobileSidebar={() => setIsMobileSidebarOpen(false)}
      />

      {/* Modals */}
      <SubmissionModal 
        isOpen={isSubmissionModalOpen} 
        onClose={() => setIsSubmissionModalOpen(false)} 
      />
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="bg-white h-16 border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 flex-shrink-0 z-30">
          <div className="flex items-center gap-4 w-full max-w-2xl">
            <button 
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md"
            >
              <Menu size={20} />
            </button>
            
            {/* Search Bar */}
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

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-8 min-h-[calc(100vh-12rem)]">

            {/* View: Search Results */}
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
              /* View: Category Browse */
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {React.createElement((filteredContent as Category).icon, { className: "w-8 h-8 text-primary" })}
                  <h1 className="text-2xl font-bold text-slate-800">{(filteredContent as Category).title}</h1>
                </div>

                {/* Sub-Category Tabs */}
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

                {/* Tool Sections */}
                {(filteredContent as Category).subCategories.map((sub) => {
                  // Only show the active tab
                  if (activeSubTab && activeSubTab !== sub.id) return null;

                  return (
                    <div key={sub.id} className="animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {sub.tools.map((tool) => (
                          <ToolCard key={tool.id} tool={tool} />
                        ))}
                        {/* "Add New" Placeholder Card */}
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

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm pb-8">
              <div className="flex justify-center gap-6 mb-4">
                <button onClick={() => setIsDisclaimerOpen(true)} className="hover:text-slate-600 transition-colors">免责声明</button>
                <a href="#" className="hover:text-slate-600 transition-colors">关于本站</a>
                <a href="#" className="hover:text-slate-600 transition-colors">联系作者</a>
              </div>
              <p>© 2024 TradeNavi 外贸人工具导航. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;