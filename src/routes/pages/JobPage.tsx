import { useState } from "react";
import MenuIcon from "@/assets/icons/menu.svg?react";
import ArrorPrevIcon from "@/assets/icons/arrow-prev.svg?react";
import ArrorNextIcon from "@/assets/icons/arrow-next.svg?react";
import TextIcon from "@/assets/icons/text.svg?react";
import BoxIcon from "@/assets/icons/box.svg?react";
import ResetPageIcon from "@/assets/icons/reset-page.svg?react";
import ResetAllIcon from "@/assets/icons/reset-all.svg?react";
import { cn } from "@/utils/cn";

const JobPage = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // pdf state
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(1);

  // toc state
  // const [toc, setToc] = useState<TocItem[]>([]);

  // fetched data
  const lastPage = 100;

  return (
    <div className="flex h-full flex-row gap-4 p-4">
      <div className="flex h-full flex-1 flex-col border">
        <div className="flex flex-row justify-between [&_button]:border [&_button]:p-2 [&_button]:disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4">
          <div className="flex flex-row gap-2">
            <button
              onClick={() => {
                setIsTocOpen(!isTocOpen);
              }}
            >
              <MenuIcon />
            </button>
          </div>

          {/* pdf menu */}
          <div className="flex flex-row gap-2">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              <ArrorPrevIcon />
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === lastPage}
            >
              <ArrorNextIcon />
            </button>
            <button>
              <TextIcon />
            </button>
            <button>
              <BoxIcon />
            </button>
            <button>
              <ResetPageIcon />
            </button>
            <button>
              <ResetAllIcon />
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-row border">
          {/* toc space */}
          <div className={cn("w-50 border", !isTocOpen && "hidden")}>toc</div>

          {/* pdf space */}
          <div className="flex-1 border">pdf view</div>
        </div>
      </div>

      {/* tab space */}
      <div className="flex-1 border"></div>
    </div>
  );
};

export default JobPage;
