import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const galleryImagesKeys = [
  { id: 1, titleKey: "gallery.images.0.title", descriptionKey: "gallery.images.0.description" },
  { id: 2, titleKey: "gallery.images.1.title", descriptionKey: "gallery.images.1.description" },
  { id: 3, titleKey: "gallery.images.2.title", descriptionKey: "gallery.images.2.description" },
  { id: 4, titleKey: "gallery.images.3.title", descriptionKey: "gallery.images.3.description" },
  { id: 5, titleKey: "gallery.images.4.title", descriptionKey: "gallery.images.4.description" },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t("gallery.titleStart")} <span className="text-gradient">{t("gallery.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("gallery.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Display */}
          <div className="glass rounded-2xl overflow-hidden aspect-video relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary">
                    {activeIndex + 1}
                  </span>
                </div>
                <p className="text-muted-foreground">{t("gallery.placeholder")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {t(galleryImagesKeys[activeIndex].titleKey)}
              </h3>
              <p className="text-muted-foreground">
                {t(galleryImagesKeys[activeIndex].descriptionKey)}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {galleryImagesKeys.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "glass rounded-xl aspect-video relative overflow-hidden transition-all duration-300",
                  activeIndex === index
                    ? "ring-2 ring-primary shadow-[0_0_20px_hsl(var(--glow))]"
                    : "hover:ring-1 hover:ring-primary/50"
                )}
              >
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary/50">
                    {index + 1}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs font-display font-semibold text-foreground">
                  {}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
