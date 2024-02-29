import "./styles.css";
import { ProductInformation, Review, Company, User, ReviewInformation } from "./lib/types";
import { getProducts, getUsers, getReviews, getCompanies } from "./lib/api";
import { useEffect, useState, FC } from "react";
import Card from "./Card";

const App: FC = () => {
  const [products, setProducts] = useState<ProductInformation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const fetchedProducts = await getProducts();
      const productsWithInfo: ProductInformation[] = await Promise.all(
        fetchedProducts.map(async (product) => {
          const company: Company | undefined = await getCompanies().then(companies =>
            companies.find((c: Company) => c.id === product.companyId)
          );

          const reviews: ReviewInformation[] = await Promise.all(product.reviewIds.map(async (reviewId: string) => {
            const review: Review | undefined = await getReviews().then(reviews =>
              reviews.find((r: Review) => r.id === reviewId)
            );

            if (review) {
              const user: User | undefined = await getUsers().then(users =>
                users.find((u: User) => u.id === review.userId)
              );
              return {
                ...review,
                user: user || { id: '', name: '' } 
              } as ReviewInformation; 
            }
            return { id: '', text: '', user: { id: '', name: '' } } as ReviewInformation;
          }));

          return {
            id: product.id,
            name: product.name || "Без названия",
            company: company || { id: '', name: '', country: '', created: 0 },
            reviews,
            description: product.description,
          };
        })
      );
      setProducts(productsWithInfo);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Список товаров:</h1>
      {isLoading && <div>Загрузка...</div>}
      {!isLoading &&
        products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
    </div>
  );
};

export default App;
