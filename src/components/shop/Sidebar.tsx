// "use client";

// import { Skeleton } from "@/components/ui/skeleton";

// export default function Sidebar() {
//   const {
//     data: {
//       result: { aggregations } = {
//         aggregations: {
//           categories: [],
//           attributes: [],
//         },
//       },
//     } = {},
//     isLoading,
//   } = useProducts();

//   const { setFilter, filters } = useFilter();

//   if (isLoading) {
//     return (
//       <aside className="w-1/7 bg-white h-full min-h-screen ml-10 mt-20 mb-14">
//         <Skeleton className="h-[200px] w-full mb-4" />
//         <Skeleton className="h-[200px] w-full mb-4" />
//         <Skeleton className="h-[200px] w-full" />
//       </aside>
//     );
//   }

//   // Brand filtresi için attributeları bul
//   const brandAttribute = aggregations?.attributes?.find(
//     (attr) => attr.Name === "Brand"
//   );
//   // Size filtresi için attributeları bul
//   const sizeAttribute = aggregations?.attributes?.find(
//     (attr) => attr.Name === "Size"
//   );
//   // Gender filtresi için attributeları bul
//   const genderAttribute = aggregations?.attributes?.find(
//     (attr) => attr.Name === "Gender"
//   );

//   return (
//     <aside className="w-1/7 bg-white h-full min-h-screen ml-10 mt-20 mb-14">
//       {/* Filter By Brand */}
//       <div className="border-x border-t border-light-silver-2 p-4">
//         <h2 className="text-base font-bold text-black uppercase mb-4 text-left">
//           Filter by Brand
//         </h2>
//         <div className="flex flex-col text-left">
//           <div className="relative mb-1">
//             <input
//               type="text"
//               placeholder="Search for brand"
//               className="px-3 py-2 border border-light-silver-2 text-sm w-[195px] h-[44px] rounded-md"
//             />
//           </div>
//           <div className="flex flex-col space-y-2 text-black mt-4 mb-1 pb-2 max-h-32 overflow-y-scroll">
//             {brandAttribute?.Values?.map((brand) => (
//               <label key={brand.key} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={filters?.brand?.includes(brand.key)}
//                   onChange={() => setFilter("brand", brand.key)}
//                   className="mr-2"
//                 />
//                 <span className="text-sm">
//                   {brand.key} ({brand.doc_count})
//                 </span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Filter By Size */}
//       <div className="border-x border-t border-light-silver-2 p-4">
//         <h2 className="text-base font-bold text-black uppercase mb-4">
//           Filter by Size
//         </h2>
//         <div className="flex flex-col space-y-2 max-h-32 overflow-y-scroll">
//           {sizeAttribute?.Values?.map((size) => (
//             <label key={size.key} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={filters?.size?.includes(size.key)}
//                 onChange={() => setFilter("size", size.key)}
//                 className="mr-2"
//               />
//               <span className="text-sm">
//                 {size.key} ({size.doc_count})
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Filter By Category */}
//       <div className="border-x border-t border-light-silver-2 p-4">
//         <h2 className="text-base font-bold text-black uppercase mb-4">
//           Filter by Category
//         </h2>
//         <div className="flex flex-col space-y-2 max-h-32 overflow-y-scroll">
//           {aggregations?.categories?.map((category) => (
//             <label key={category.key} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={filters?.category?.includes(category.key)}
//                 onChange={() => setFilter("category", category.key)}
//                 className="mr-2"
//               />
//               <span className="text-sm">
//                 {category.key} ({category.doc_count})
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Filter By Gender */}
//       <div className="border-x border-t border-y border-light-silver-2 p-4">
//         <h2 className="text-base font-bold text-black uppercase mb-4">
//           Filter by Gender
//         </h2>
//         <div className="flex flex-col space-y-2">
//           {genderAttribute?.Values?.map((gender) => (
//             <label key={gender.key} className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={filters?.gender?.includes(gender.key)}
//                 onChange={() => setFilter("gender", gender.key)}
//                 className="mr-2"
//               />
//               <span className="text-sm">
//                 {gender.key} ({gender.doc_count})
//               </span>
//             </label>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// }
