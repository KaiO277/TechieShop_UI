import React from 'react';
import { useState } from "react";
import FeaturedProduct from './FeaturedProducts';
import SidebarFilters from './SidebarFilters';
import NewsletterSection from './NewsletterSection';

const ContentProduct = () => {
    const [filters, setFilters] = useState(null);

    return (
        <>
        <section className="py-12" data-id="5vgeqfeg" data-line="59-337">
            <div className="container mx-auto px-4" data-id="cqkxwd9k" data-line="60-336">
                <div className="flex flex-col md:flex-row gap-8" data-id="fa7j2xg2" data-line="61-335">
                    <SidebarFilters onApply={setFilters} />
                    <FeaturedProduct filters={filters} />
                </div>
            </div>
        </section>
                
        </>
    );
}

export default ContentProduct;