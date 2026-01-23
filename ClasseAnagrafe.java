public class ClasseAnagrafe {

    public void aggiungiCittadino(String cf){
        try {
            CodiceFiscale codiceFiscale = new CodiceFiscale(cf);
            System.out.println("Cittadino aggiunto con CF: " + codiceFiscale.getCodiceFiscale());
        } catch (CodiceFiscaleNonValidoException e) {
            System.out.println("Errore: " + e.getMessage());
        }
    }
}
