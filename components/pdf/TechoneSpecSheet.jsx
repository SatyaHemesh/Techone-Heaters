import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Create exact, print-perfect styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 2,
    borderBottomColor: '#EA580C', // Techone Orange
    paddingBottom: 20,
    marginBottom: 30,
  },
  logoPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#111827',
  },
  companyDetails: {
    alignItems: 'flex-end',
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textTransform: 'uppercase',
  },
  tagline: {
    fontSize: 10,
    color: '#EA580C',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
    color: '#111827',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    minHeight: 35,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#F3F4F6',
    fontWeight: 'bold',
  },
  colLabel: {
    width: '40%',
    padding: 8,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4B5563',
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },
  colValue: {
    width: '60%',
    padding: 8,
    fontSize: 10,
    color: '#111827',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 8,
    color: '#9CA3AF',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 10,
  }
});

// The Actual PDF Document Component
export const TechoneSpecSheet = ({ productName, specifications }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* PROFESSIONAL HEADER */}
      <View style={styles.header}>
        {/* If you have a real logo path, use <Image src="/logo.png" style={styles.logoPlaceholder} /> */}
        <View style={styles.logoPlaceholder}></View>
        <View style={styles.companyDetails}>
          <Text style={styles.companyName}>Techone Heaters</Text>
          <Text style={styles.tagline}>Mastering Thermal Energy</Text>
        </View>
      </View>

      {/* DOCUMENT TITLE */}
      <Text style={styles.title}>{productName} - Technical Specifications</Text>

      {/* CLEAN, ENGINEERING-GRADE TABLE */}
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.colLabel}>Parameter</Text>
          <Text style={styles.colValue}>Specification</Text>
        </View>
        
        {specifications.map((spec, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.colLabel}>{spec.label}</Text>
            <Text style={styles.colValue}>{spec.value}</Text>
          </View>
        ))}
      </View>

      {/* AUTOMATIC FOOTER WITH PAGE NUMBERS */}
      <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
        `Techone Heaters | Confidential & Proprietary | Page ${pageNumber} of ${totalPages}`
      )} fixed />
      
    </Page>
  </Document>
);