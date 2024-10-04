"use client";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: 14,
  },
});

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading document...</p>,
  }
);

const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View>
            <Text
              style={{
                fontSize: 30,
              }}
            >
              Title for document
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default function Home() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center p-16 gap-8">
      <h3 className="text-lg md:text-2xl">
        ReactPDF client-rendered example using Next.js with app router
      </h3>
      <PDFViewer className="w-[900px] h-[calc(100svh-12rem)]">
        <MyDocument />
      </PDFViewer>
    </main>
  );
}
