import { Link } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function MainScreen() {
  const [baseCurrency, setBaseCurrency] = useState("CAD");
  const [destCurrency, setDestCurrency] = useState("USD");
  const [amount, setAmount] = useState("1");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  
  const API_KEY = "fca_live_oZRF8JJO2K0tS4kYvPJtjrzcZvF9HXMxILDOJ82J";

  const validateInputs = () => {
    setError("");

    const base = baseCurrency.trim().toUpperCase();
    const dest = destCurrency.trim().toUpperCase();
    const amtNumber = Number(amount);

    const codeRegex = /^[A-Z]{3}$/;

    if (!codeRegex.test(base)) {
      setError("Base currency must be a 3-letter uppercase code (e.g., CAD).");
      return null;
    }

    if (!codeRegex.test(dest)) {
      setError(
        "Destination currency must be a 3-letter uppercase code (e.g., USD)."
      );
      return null;
    }

    if (isNaN(amtNumber) || amtNumber <= 0) {
      setError("Amount must be a positive number.");
      return null;
    }

    return { base, dest, amtNumber };
  };

  const handleConvert = async () => {
    const valid = validateInputs();
    if (!valid) return;

    const { base, dest, amtNumber } = valid;

    setLoading(true);
    setError("");
    setExchangeRate(null);
    setConvertedAmount(null);

    try {
      const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${base}&currencies=${dest}`;

      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error("Invalid or missing API key.");
        }
        if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please try again later.");
        }
        throw new Error(`API error (status ${response.status}).`);
      }

      const json = await response.json();

      if (!json || !json.data || json.data[dest] == null) {
        throw new Error(
          "Currency not found in API response. Check your codes and try again."
        );
      }

      const rate = json.data[dest]; // 1 base = rate dest
      const result = amtNumber * rate;

      setExchangeRate(rate);
      setConvertedAmount(result);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Currency Converter</Text>

      {/* Base Currency */}
      <Text style={styles.label}>Base Currency</Text>
      <TextInput
        style={styles.input}
        value={baseCurrency}
        onChangeText={setBaseCurrency}
        maxLength={3}
        autoCapitalize="characters"
      />

      {/* Destination Currency */}
      <Text style={styles.label}>Destination Currency</Text>
      <TextInput
        style={styles.input}
        value={destCurrency}
        onChangeText={setDestCurrency}
        maxLength={3}
        autoCapitalize="characters"
      />

      {/* Amount */}
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* Error */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Convert button */}
      <View style={styles.buttonWrapper}>
        <Button title={loading ? "Converting..." : "Convert"} onPress={handleConvert} disabled={loading} />
      </View>

      {/* Loading indicator */}
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

      {/* Result */}
      {exchangeRate != null && convertedAmount != null && !loading && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            Exchange rate: 1 {baseCurrency.toUpperCase()} ={" "}
            {exchangeRate.toFixed(4)} {destCurrency.toUpperCase()}
          </Text>
          <Text style={styles.resultText}>
            {amount} {baseCurrency.toUpperCase()} ={" "}
            {convertedAmount.toFixed(4)} {destCurrency.toUpperCase()}
          </Text>
        </View>
      )}

      <View style={{ marginTop: 30 }}>
        <Link href="/about">
          {/* <Button title="Go to About Screen" /> */}
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  error: {
    color: "red",
    marginVertical: 10,
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 10,
  },
  resultBox: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  resultText: {
    fontSize: 16,
    marginBottom: 4,
  },
});
