'use client';

import { useState, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image, Font } from '@react-pdf/renderer';
import { Download, FileText } from 'lucide-react';

// Keep track to prevent hot-reload errors in development
let fontsRegistered = false;

// ==========================================
// 1. SINGLE-PAGE ENTERPRISE SPEC SHEET STYLES
// ==========================================
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Poppins', backgroundColor: '#ffffff' },
  
  // --- Header Layout ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: '#EA580C',
    paddingBottom: 15,
    marginBottom: 15,
  },
  logoSection: { width: '35%' },
  logo: { width: 120, height: 'auto', marginBottom: 5 },
  companyDetails: { width: '65%', alignItems: 'flex-end' },
  
  // FIXED: Removed "letterSpacing: 1" so Poppins renders with its natural, tight gaps
  companyTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827', marginBottom: 4, fontFamily: 'Poppins' },
  companyAddress: { fontSize: 9, color: '#4B5563', marginBottom: 2, fontFamily: 'Poppins' },
  
  // --- Document Title & Meta Grid ---
  docTitleBlock: { marginBottom: 12 },
  mainTitle: { fontSize: 20, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', fontFamily: 'Poppins' },
  
  // FIXED: Removed "letterSpacing: 1" here as well
  subTitle: { fontSize: 9, fontWeight: 'bold', color: '#0891B2', textTransform: 'uppercase', marginTop: 4, fontFamily: 'Poppins' },

  metaGrid: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 2,
    marginBottom: 15,
  },
  metaCol: { flex: 1, padding: 8, borderRightWidth: 1, borderRightColor: '#E5E7EB' },
  metaColLast: { flex: 1, padding: 8 },
  metaLabel: { fontSize: 7, color: '#6B7280', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: 4, fontFamily: 'Poppins' },
  metaValue: { fontSize: 9, color: '#111827', fontWeight: 'bold', fontFamily: 'Poppins' },

  // --- Content Sections ---
  sectionHeader: {
    backgroundColor: '#F3F4F6',
    padding: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#EA580C',
    marginBottom: 8,
    marginTop: 10,
  },
  sectionTitle: { fontSize: 10, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', fontFamily: 'Poppins' },
  paragraph: { fontSize: 9, color: '#374151', lineHeight: 1.5, marginBottom: 8, fontFamily: 'Poppins' },
  
  // --- Bullet Points ---
  bulletRow: { flexDirection: 'row', marginBottom: 4, paddingLeft: 8 },
  bulletIcon: { width: 10, fontSize: 9, color: '#EA580C', fontWeight: 'bold', fontFamily: 'Poppins' },
  bulletText: { flex: 1, fontSize: 9, color: '#374151', lineHeight: 1.4, fontFamily: 'Poppins' },

  // --- Technical Data Table ---
  table: { width: '100%', borderWidth: 1, borderColor: '#E5E7EB', marginTop: 8, marginBottom: 15 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#E5E7EB', minHeight: 24, alignItems: 'center' },
  tableRowLast: { flexDirection: 'row', minHeight: 24, alignItems: 'center' },
  tableHeaderRow: { backgroundColor: '#F9FAFB' },
  tableCellHeader: { fontSize: 8, fontWeight: 'bold', color: '#4B5563', textTransform: 'uppercase', fontFamily: 'Poppins' },
  tableColLeft: { width: '40%', padding: 6, borderRightWidth: 1, borderRightColor: '#E5E7EB' },
  tableColRight: { width: '60%', padding: 6 },
  tableCell: { fontSize: 9, color: '#111827', fontFamily: 'Poppins' },

  // --- T&C Style Abbreviations Grid ---
  tncBlock: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  tncTitle: { fontSize: 8, fontWeight: 'bold', color: '#111827', marginBottom: 6, fontFamily: 'Poppins' },
  abbrevGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  abbrevItem: { width: '33%', flexDirection: 'row', marginBottom: 4 },
  abbrevKey: { fontSize: 7, fontWeight: 'bold', color: '#111827', width: 22, fontFamily: 'Poppins' },
  abbrevValue: { fontSize: 7, color: '#6B7280', fontFamily: 'Poppins' },
  tncDisclaimer: { fontSize: 7, color: '#6B7280', marginTop: 4, fontFamily: 'Poppins' },

  // --- Formal Footer ---
  footer: {
    position: 'absolute', bottom: 20, left: 30, right: 30,
    flexDirection: 'row', justifyContent: 'space-between',
    borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingTop: 10,
  },
  footerText: { fontSize: 7, color: '#9CA3AF', fontFamily: 'Poppins' }
});

// ==========================================
// 2. THE PDF DOCUMENT COMPONENT
// ==========================================
const EnterpriseSpecSheet = ({ product }) => {
  const currentDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const docId = `TDS-${Math.floor(Math.random() * 90000) + 10000}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* HEADER WITH STANDARD ADDRESS */}
        <View style={styles.header}>
          <View style={styles.logoSection}>
            <Image src="/images/logo.png" style={styles.logo} />
          </View>
          <View style={styles.companyDetails}>
            <Text style={styles.companyTitle}>TECHONE HEATERS</Text>
            <Text style={styles.companyAddress}>506/P, 7-920, Subhash Nagar, Jeedimetla</Text>
            <Text style={styles.companyAddress}>Hyderabad, Telangana, India - 500055</Text>
            <Text style={styles.companyAddress}>Email: techoneheaters@gmail.com</Text>
            <Text style={styles.companyAddress}>Phone: +91 91777 76501 / 97005 41138</Text>
          </View>
        </View>

        {/* TITLE & META GRID */}
        <View style={styles.docTitleBlock}>
          <Text style={styles.mainTitle}>{product.name}</Text>
          <Text style={styles.subTitle}>Technical Data Sheet (TDS)</Text>
        </View>

        <View style={styles.metaGrid}>
          <View style={styles.metaCol}>
            <Text style={styles.metaLabel}>Document Reference</Text>
            <Text style={styles.metaValue}>{docId}</Text>
          </View>
          <View style={styles.metaCol}>
            <Text style={styles.metaLabel}>Equipment Category</Text>
            <Text style={styles.metaValue}>{product.category}</Text>
          </View>
          <View style={styles.metaColLast}>
            <Text style={styles.metaLabel}>Date Generated</Text>
            <Text style={styles.metaValue}>{currentDate}</Text>
          </View>
        </View>

        {/* 1.0 ENGINEERING OVERVIEW */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>1.0 Engineering Overview</Text>
        </View>
        <Text style={styles.paragraph}>{product.description}</Text>

        {/* 2.0 CORE FEATURES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>2.0 Core Technical Features</Text>
        </View>
        {product.features && product.features.length > 0 ? (
          product.features.map((feature, idx) => (
            <View key={idx} style={styles.bulletRow}>
              <Text style={styles.bulletIcon}>■</Text>
              <Text style={styles.bulletText}>{feature}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.paragraph}>Custom engineered based on specific application requirements.</Text>
        )}

        {/* 3.0 TECHNICAL SPECIFICATIONS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>3.0 Standard Specifications</Text>
        </View>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeaderRow]}>
            <View style={styles.tableColLeft}><Text style={styles.tableCellHeader}>Parameter</Text></View>
            <View style={styles.tableColRight}><Text style={styles.tableCellHeader}>Specification</Text></View>
          </View>
          
          {(product.specs || [
            { label: "Operating Temperature", value: "Dependent on custom application" },
            { label: "Mounting Mechanism", value: "Standard Industrial Fastening" },
            { label: "Insulation Grade", value: "High-density thermal resistant" },
            { label: "Voltage Options", value: "120V / 240V / 480V Available" }
          ]).map((spec, index, array) => (
            <View style={index === array.length - 1 ? styles.tableRowLast : styles.tableRow} key={index}>
              <View style={styles.tableColLeft}><Text style={styles.tableCell}>{spec.label}</Text></View>
              <View style={styles.tableColRight}><Text style={styles.tableCell}>{spec.value}</Text></View>
            </View>
          ))}
        </View>

        {/* T&C STYLE ABBREVIATIONS (LINE-BY-LINE GRID) */}
        <View style={styles.tncBlock}>
          <Text style={styles.tncTitle}>NOTES & ABBREVIATIONS:</Text>
          
          <View style={styles.abbrevGrid}>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>TDS:</Text><Text style={styles.abbrevValue}>Technical Data Sheet</Text></View>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>MS:</Text><Text style={styles.abbrevValue}>Mild Steel</Text></View>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>SS:</Text><Text style={styles.abbrevValue}>Stainless Steel</Text></View>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>V:</Text><Text style={styles.abbrevValue}>Volts</Text></View>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>W:</Text><Text style={styles.abbrevValue}>Watts / Width</Text></View>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>D:</Text><Text style={styles.abbrevValue}>Depth</Text></View>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>H:</Text><Text style={styles.abbrevValue}>Height</Text></View>
            <View style={styles.abbrevItem}><Text style={styles.abbrevKey}>°C:</Text><Text style={styles.abbrevValue}>Degrees Celsius</Text></View>
          </View>

          <Text style={styles.tncDisclaimer}>
            * All specifications provided are standard parameters. Custom dimensions and tolerances are available upon engineering review.
          </Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>CONFIDENTIAL & PROPRIETARY | © TECHONE HEATERS</Text>
          <Text style={styles.footerText} render={({ pageNumber, totalPages }) => (
            `PAGE ${pageNumber} OF ${totalPages}`
          )} />
        </View>
        
      </Page>
    </Document>
  );
};

// ==========================================
// 3. THE UI BUTTON COMPONENT (Hydration Safe)
// ==========================================
export default function DownloadPdfButton({ product }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !fontsRegistered) {
      Font.register({
        family: 'Poppins',
        fonts: [
          { src: `${window.location.origin}/fonts/Poppins-Regular.ttf`, fontWeight: 'normal' },
          { src: `${window.location.origin}/fonts/Poppins-Bold.ttf`, fontWeight: 'bold' }
        ]
      });
      fontsRegistered = true;
    }
    
    setIsClient(true);
  }, []);

  const safeProduct = product || {
    name: "Ceramic Strip Heater",
    category: "HEATERS",
    description: "Used for duct heating, space heaters, drying ovens, food warmers, shrinking tunnels, and air heating/curing applications.",
    features: [
      "Versatile applications across multiple industries",
      "Optimized for duct & space heating",
      "Durable high-temperature ceramic build"
    ]
  };

  if (!isClient) {
    return (
      <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-300 dark:bg-gray-800 text-gray-500 font-bold uppercase tracking-widest text-sm rounded-sm cursor-not-allowed border border-gray-400 dark:border-gray-700">
        <FileText className="w-5 h-5 animate-pulse" />
        Preparing Document...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<EnterpriseSpecSheet product={safeProduct} />}
      fileName={`${safeProduct.name.replace(/\s+/g, '_')}_Tech_Data_Sheet.pdf`}
      className="block w-full"
    >
      {({ loading }) => (
        <button
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm shadow-md group ${
            loading
              ? 'bg-gray-400 dark:bg-gray-700 text-white cursor-wait'
              : 'bg-white dark:bg-industrial-800 text-orange-600 dark:text-orange-500 border border-orange-600 dark:border-orange-500 hover:bg-orange-600 hover:text-white'
          }`}
        >
          {loading ? (
            <>
              <FileText className="w-5 h-5 animate-pulse" />
              Generating PDF...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Spec Sheet
            </>
          )}
        </button>
      )}
    </PDFDownloadLink>
  );
}