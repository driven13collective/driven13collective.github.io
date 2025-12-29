import React from 'react';
import { PolicyLayout } from '../components/PolicyLayout';

export const LookbookPage: React.FC = () => {
  const collections = [
    {
      id: 1,
      season: "FW24",
      title: "The Foundation",
      description: "The inaugural collection. Where the visual language was established and the philosophy was first worn.",
      images: [
        "/images/a_high_end_8k_cinematic_fashion_lookbook_spread.jpeg",
        "/images/a_cinematic_high_fashion_close_up_shot_from_behind.jpeg",
        "/images/a_cinematic_fashion_shot_of_a_model.jpeg",
      ]
    },
    {
      id: 2,
      season: "SS25",
      title: "Velocity",
      description: "Lighter weights. Same intensity. Technical fabrics engineered for warm weather performance.",
      images: [
        "/images/a_cinematic_fashion_shot_of_a_model (1).jpeg",
        "/images/a_cinematic_high_fashion_close_up_shot_of_the.jpeg",
        "/images/a_cinematic_high_fashion_close_up_shot_of_the t-shirt.jpeg",
      ]
    }
  ];

  return (
    <PolicyLayout title="">
      <div className="space-y-20 text-neutral-300">
        
        {/* Hero */}
        <section className="text-center -mt-8">
          <span className="text-[10px] tracking-[1em] uppercase text-neutral-500 block mb-4">Visual Archive</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white text-glow mb-6">
            LOOKBOOK
          </h1>
          <div className="w-24 h-[2px] bg-white mx-auto mb-8"></div>
          <p className="text-neutral-400 max-w-xl mx-auto">
            The visual documentation of 13. Each collection tells a chapter of the story we're writing together.
          </p>
        </section>

        {/* Collections */}
        {collections.map((collection, index) => (
          <section key={collection.id} className={index % 2 === 0 ? "" : "bg-neutral-900 -mx-6 px-6 py-16"}>
            <div className="max-w-6xl mx-auto">
              {/* Collection Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-2">{collection.season}</span>
                  <h2 className="text-4xl font-bold text-white tracking-tight">{collection.title}</h2>
                </div>
                <p className="text-neutral-500 max-w-md text-sm">{collection.description}</p>
              </div>
              
              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {collection.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="group relative overflow-hidden aspect-[2/3]">
                    <img 
                      src={image} 
                      alt={`${collection.title} - Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] uppercase tracking-widest bg-black/80 px-3 py-2">
                        {collection.season} / {String(imgIndex + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Editorial Section */}
        <section>
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-4">Editorial</span>
            <h2 className="text-3xl font-bold text-white">The Technical Mind</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden group">
              <img 
                src="/images/a_high_end_8k_cinematic_fashion_lookbook_spread.jpeg" 
                alt="Editorial 1"
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden group">
                <img 
                  src="/images/a_cinematic_high_fashion_close_up_shot_from_behind.jpeg" 
                  alt="Editorial 2"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden group">
                <img 
                  src="/images/a_cinematic_fashion_shot_of_a_model.jpeg" 
                  alt="Editorial 3"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden group col-span-2">
                <img 
                  src="/images/a_cinematic_fashion_shot_of_a_model (1).jpeg" 
                  alt="Editorial 4"
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="bg-white text-black -mx-6 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-4">Up Close</span>
              <h2 className="text-3xl font-bold">The Details</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
                  <img 
                    src="/images/a_cinematic_high_fashion_close_up_shot_from_behind.jpeg" 
                    alt="Embroidery Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">Embroidery</span>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
                  <img 
                    src="/images/a_cinematic_high_fashion_close_up_shot_of_the.jpeg" 
                    alt="Fabric Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">Fabric</span>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
                  <img 
                    src="/images/a_cinematic_high_fashion_close_up_shot_of_the t-shirt.jpeg" 
                    alt="Stitching Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">Stitching</span>
              </div>
              <div className="text-center">
                <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
                  <img 
                    src="/images/a_cinematic_fashion_shot_of_a_model.jpeg" 
                    alt="Label Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">Label</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Fit */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-500">The Approach</span>
              <h2 className="text-3xl font-bold text-white">Engineered Fit</h2>
              <p className="text-neutral-400 leading-relaxed">
                Every piece in the 13 collection is designed with intention. We don't follow trends—we establish standards. The fit is relaxed but intentional, comfortable but never careless.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Our patterns are developed through extensive testing, refined through feedback from the collective, and finalized only when they meet our standard of precision.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Silhouette</span>
                  <span className="text-white">Relaxed Contemporary</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Shoulder</span>
                  <span className="text-white">Dropped, Natural</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Body</span>
                  <span className="text-white">Straight, Boxy</span>
                </div>
                <div className="flex justify-between text-sm border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Length</span>
                  <span className="text-white">Extended</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/a_cinematic_fashion_shot_of_a_model (1).jpeg" 
                alt="Fit Guide" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-neutral-800">
          <h3 className="text-xl font-bold text-white mb-4">Explore the Collection</h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            From prospect to legend, there's a piece for every position in the collective.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all"
          >
            Submit Your Case
          </a>
        </section>

      </div>
    </PolicyLayout>
  );
};
