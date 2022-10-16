function HomePage(): JSX.Element {
    return (
        <main id='home'>
            <h1>Home</h1>

            <section>
                <p>
                    Time to go grocery shopping!
                </p>

                <p>
                    Click the <i>Browse</i> link in the nav bar to view the different products you can buy at this grocery store. Each product features a name, an image, and a price. You can click the button by the image to add it to your cart. If the item is almost out of stock, a warning message will be displayed alongside the image. If an item is out of stock, then it will appear grayed out, and you will not be able to add it to your cart.
                </p>

                <p>
                    Once you're ready to checkout, click the <i>Cart</i> link the nav bar to view the contents in your cart so far. You can edit this list by adding or removing elements (so long as they're in stock). At the bottom of the page, you'll see your running total based on all the items in your cart. Click the <i>Checkout</i> button when you want to finalize your purchase.
                </p>

                <p>
                    After making your purchase, you'll be redirected back here. If you go back to the <i>Cart</i> after checking out, you'll notice that it's empty. However, if you go back to <i>Browse</i>, you'll notice that the items you purchased have appropriately reduced the store's stock. (As in, if you purchased all the apples when you checked out, then when you go back to browse the options, you'll notice that apples are still no longer available.)
                </p>

                <p>
                    Happy shopping!
                </p>
            </section>
        </main>
    )
}

export default HomePage
