public class DiscountHandler {

    public static class DiscountExceedException extends Exception {
        public DiscountExceedException(String message) {
            super(message);
        }
    }

    private String message = "";

    public void setMessage(String message) {
        this.message = message;
    }

   
    public void applyDiscount(double price, double discount) throws DiscountExceedException {
        if (discount > price) {
            throw new DiscountExceedException("Discount exceeds the price!");
        }
        System.out.println("Discount applied successfully.");
    }

    public static void main(String[] args) {
       
        DiscountHandler discountHandler = new DiscountHandler();

       
        discountHandler.setMessage("Processing discount...");

       
        double price = 100.0;
        double discount = 150.0;

        try {
            try {
               
                System.out.println(discountHandler.message);
                discountHandler.applyDiscount(price, discount);
            } catch (DiscountExceedException e) {
                System.out.println("Caught DiscountExceedException: " + e.getMessage());
            } finally {
                System.out.println("Finally block of nested try.");
            }
        } catch (Exception e) {
            System.out.println("Caught Exception in outer try block: " + e.getMessage());
        } finally {
            System.out.println("Finally block of outer try.");
        }
    }
}
