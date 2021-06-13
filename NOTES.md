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
[] How to render a random, single quote on page?
[x] How to filter quotes by category?
[x] Category filter dropdown
[x] New quote submission
[] View category page
[x] View all quotes by category?
[x] Routes
[] Clear category edit form after submission or redirect
[] Pre-fill category form with selection
[x] Redux
[] License + readme
[] App needs to render new-quote route and pass props 

<>
            {this.props.categories.map((category, id) => 
            <div key={id}>
                <CategoryCard name={category.name} description={category.description} />
                
            </div>
        
            
          )}
        </>