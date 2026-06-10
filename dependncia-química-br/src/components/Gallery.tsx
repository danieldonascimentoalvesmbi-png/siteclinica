import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "all" | "acomodacoes" | "lazer" | "comuns";
  categoryLabel: string;
  image: string;
  description: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<"all" | "acomodacoes" | "lazer" | "comuns">("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      title: "Fachada Moderna",
      category: "comuns",
      categoryLabel: "Áreas Comuns",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      description: "Entrada principal planejada integrada à natureza, conferindo acolhimento e segurança desde a chegada.",
    },
    {
      id: 1,
      title: "Quartos Coletivos",
      category: "acomodacoes",
      categoryLabel: "Acomodações",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
      description: "Espaços amplos, arejados e confortáveis para incentivar a convivência harmônica e o companheirismo.",
    },
    {
      id: 2,
      title: "Quartos Individuais",
      category: "acomodacoes",
      categoryLabel: "Acomodações",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      description: "Ambiente reservado para maior privacidade e foco no processo individual de reabilitação.",
    },
    {
      id: 3,
      title: "Refeitório Integrado",
      category: "comuns",
      categoryLabel: "Áreas Comuns",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      description: "Alimentação balanceada por nutricionistas em um espaço iluminado e extremamente higienizado.",
    },
    {
      id: 4,
      title: "Área Verde Terapêutica",
      category: "lazer",
      categoryLabel: "Lazer e Natureza",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
      description: "Amplo jardim para meditação, caminhadas e contato revigorante com o meio ambiente.",
    },
    {
      id: 5,
      title: "Espaço de Convivência",
      category: "comuns",
      categoryLabel: "Áreas Comuns",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
      description: "Salas de estar elegantes com poltronas acolhedoras para leitura, conversas e dinâmicas.",
    },
    {
      id: 6,
      title: "Piscina Terapêutica",
      category: "lazer",
      categoryLabel: "Lazer e Natureza",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
      description: "Área de lazer aquático utilizada para hidroterapia, relaxamento muscular e atividades físicas orientadas.",
    },
    {
      id: 7,
      title: "Sala de Atividades",
      category: "comuns",
      categoryLabel: "Áreas Comuns",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
      description: "Estúdio iluminado dedicado a palestras, terapias em grupo, trabalhos manuais e meditação orientada.",
    },
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? galleryItems.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === galleryItems.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  return (
    <section id="unidades" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-sans text-xs font-bold tracking-widest text-[#16A34A] uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Tour Pelas Unidades
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight mt-4 mb-5 text-white">
            Nossa Infraestrutura Parceira
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-[#0F4C81] to-[#16A34A] mx-auto rounded-full"></div>
          <p className="font-sans text-sm text-slate-400 mt-5 leading-relaxed">
            Unidades preparadas para acolher pacientes em ambientes de tranquilidade, dignidade e absoluto cuidado médico.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {[
            { id: "all", label: "Ver Tudo" },
            { id: "acomodacoes", label: "Acomodações" },
            { id: "lazer", label: "Lazer & Natureza" },
            { id: "comuns", label: "Áreas Comuns" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                activeFilter === tab.id
                  ? "bg-[#16A34A] text-white shadow-lg shadow-[#16A34A]/25"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 px-2 py-0.5 font-sans text-[9px] font-bold text-slate-300 tracking-wider uppercase">
                  {item.categoryLabel}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5">
                <h3 className="font-sans text-sm font-bold text-white mb-2 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#16A34A]" />
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Click to Expand) */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Center Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl animate-scale"
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-950">
              <img
                src={galleryItems[selectedImageIndex].image}
                alt={galleryItems[selectedImageIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 md:p-8 bg-slate-900/95 border-t border-white/5">
              <span className="font-sans text-[10px] font-bold tracking-wider text-[#16A34A] uppercase bg-emerald-500/10 px-2.5 py-1 rounded-md">
                {galleryItems[selectedImageIndex].categoryLabel}
              </span>
              <h3 className="font-sans text-xl md:text-2xl font-extrabold text-white mt-3 mb-2">
                {galleryItems[selectedImageIndex].title}
              </h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                {galleryItems[selectedImageIndex].description}
              </p>
            </div>
          </div>

          {/* Next Navigation */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
