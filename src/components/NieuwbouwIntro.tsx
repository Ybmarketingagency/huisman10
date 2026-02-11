import React from 'react';
import { Home, Paintbrush, Sparkles, CheckCircle } from 'lucide-react';

const NieuwbouwIntro = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Home className="w-12 h-12 text-emerald-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-700">
                Dé Partner voor Nieuwbouw Wandafwerking
              </h2>
            </div>
            <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Huisman Wandafwerking is gespecialiseerd in professionele <strong>wandafwerking</strong> en <strong>plafondafwerking</strong> voor nieuwbouwwoningen en bedrijfspanden. Met jarenlange ervaring in de nieuwbouwsector leveren wij hoogwaardige afwerking die perfect aansluit bij uw project.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Heeft u een nieuwbouwwoning en bent u op zoek naar een betrouwbare partij voor de <strong>wand- en plafondafwerking</strong>? Dan bent u bij ons aan het juiste adres. Wij verzorgen zowel <strong>airless spuiten</strong> als traditioneel schilderwerk, en combineren dit met glasweefsel, renovlies en andere hoogwaardige wandbedekkingen.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Paintbrush className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-800">Onze Expertise</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Professionele wandafwerking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Vakkundige plafondafwerking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Airless spuiten voor grote oppervlaktes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Glasweefsel en renovlies toepassing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-800">Waarom Huisman?</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ruime ervaring in nieuwbouw</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Kwaliteit en betrouwbaarheid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aandacht voor detail en afwerking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Scherpe prijzen en korte levertijden</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-lg p-6 text-center">
                <p className="text-lg font-semibold">
                  Van nieuwbouwwoningen tot grootschalige projecten – wij leveren strakke, duurzame afwerking waar u jarenlang plezier van heeft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NieuwbouwIntro;
