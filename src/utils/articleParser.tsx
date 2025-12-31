import React from "react";

// Fonction pour convertir le HTML brut en composants React
export function parseArticleContent(htmlContent: string): React.ReactNode {
  // Pour l'instant, on retourne le HTML brut avec dangerouslySetInnerHTML
  // Dans une vraie application, on utiliserait un parser HTML plus sûr
  return (
    <div 
      className="article-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

// Fonction helper pour créer du contenu structuré à partir de données
export function createStructuredContent(data: {
  introduction?: string;
  sections?: Array<{
    title?: string;
    level?: 1 | 2 | 3 | 4;
    paragraphs?: string[];
    list?: string[];
    table?: Array<Array<string>>;
    highlight?: string;
    quote?: {
      text: string;
      author?: string;
      role?: string;
    };
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
  }>;
  conclusion?: string;
}): React.ReactNode {
  return (
    <div className="space-y-8">
      {data.introduction && (
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          {data.introduction}
        </p>
      )}
      
      {data.sections?.map((section, index) => (
        <div key={index} className="space-y-4">
          {section.title && (
            section.level === 1 ? (
              <h2 className="text-3xl font-bold text-[#344054] mt-12 mb-6 first:mt-0">
                {section.title}
              </h2>
            ) : section.level === 2 ? (
              <h3 className="text-2xl font-bold text-[#344054] mt-10 mb-4">
                {section.title}
              </h3>
            ) : (
              <h4 className="text-xl font-bold text-[#344054] mt-8 mb-3">
                {section.title}
              </h4>
            )
          )}
          
          {section.paragraphs?.map((para, pIndex) => (
            <p key={pIndex} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
          
          {section.highlight && (
            <div className="p-6 bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl border-l-4 border-[#3F2F8D] my-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                {section.highlight}
              </p>
            </div>
          )}
          
          {section.quote && (
            <div className="my-8 p-8 bg-gradient-to-br from-[#3F2F8D]/5 to-[#6F5DE9]/5 rounded-xl border-2 border-[#3F2F8D]/20">
              <p className="text-xl text-gray-700 leading-relaxed italic mb-4">
                "{section.quote.text}"
              </p>
              {section.quote.author && (
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3F2F8D] to-[#6F5DE9] rounded-full flex items-center justify-center text-white font-bold">
                    {section.quote.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#344054]">{section.quote.author}</div>
                    {section.quote.role && (
                      <div className="text-sm text-gray-600">{section.quote.role}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {section.image && (
            <div className="my-8">
              <div className="rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                <img 
                  src={section.image.src} 
                  alt={section.image.alt}
                  className="w-full h-auto"
                />
              </div>
              {section.image.caption && (
                <p className="text-sm text-gray-500 text-center mt-2 italic">
                  {section.image.caption}
                </p>
              )}
            </div>
          )}
          
          {section.list && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {section.list.map((item, lIndex) => (
                <li key={lIndex} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          )}
          
          {section.table && section.table.length > 0 && (
            <div className="overflow-x-auto my-6 rounded-lg border-2 border-gray-300 shadow-sm">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#3F2F8D] to-[#6F5DE9] text-white">
                    {section.table[0]?.map((header, hIndex) => (
                      <th 
                        key={hIndex} 
                        className="border-2 border-gray-300 px-4 py-3 text-left font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.slice(1).map((row, rIndex) => (
                    <tr 
                      key={rIndex} 
                      className={rIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      {row.map((cell, cIndex) => (
                        <td 
                          key={cIndex} 
                          className="border-2 border-gray-300 px-4 py-3 text-gray-700"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
      
      {data.conclusion && (
        <div className="mt-8 p-6 bg-gradient-to-br from-[#beb2ff]/10 to-[#83F0C8]/10 rounded-xl border-2 border-[#beb2ff]/30">
          <p className="text-gray-700 leading-relaxed">{data.conclusion}</p>
        </div>
      )}
    </div>
  );
}
