components
class
    []CategoryContainer
    []QuoteContainer
functional
    []App
    []Quote
    []Category
    []CategoryDropdown
    []NewQuoteForm
    

NEED 
[] How to render a single quote on page?
[] How to filter quotes by category?
[] How to render random quote on page?
[] Category filter dropdown
[] New quote submission

<>
            {this.props.categories.map((category, id) => 
            <div key={id}>
                <CategoryCard name={category.name} description={category.description} />
                
            </div>
        
            
          )}
        </>