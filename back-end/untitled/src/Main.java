public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
    public double calcularPrecioTotal(double precioBase, double impuesto, double descuento) {
        double precioConImpuesto = precioBase + (precioBase * impuesto);
        double precioFinal = precioConImpuesto - descuento;
        return precioFinal;
    }
}