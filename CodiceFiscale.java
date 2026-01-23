import static java.lang.Character.isLetter;

public class CodiceFiscale {

    private String codiceFiscale;

    public CodiceFiscale(String codiceFiscale) throws CodiceFiscaleNonValidoException{

        if (codiceFiscale.length() != 16){
            throw new CodiceFiscaleNonValidoException("lunghezza non valida");
        }

        if  (!codiceFiscale.matches("[A-Za-z0-9]+")) {
            throw new CodiceFiscaleNonValidoException("Caratteri non validi");
        }

        char ultimo = codiceFiscale.charAt(15);
        if (!(ultimo >= 'A' && ultimo <= 'Z')) {
            throw new CodiceFiscaleNonValidoException(
                    "Carattere di controllo non valido"
            );
        }
        this.codiceFiscale = codiceFiscale;
    }

    public String getCodiceFiscale() {
        return codiceFiscale;
    }
}
