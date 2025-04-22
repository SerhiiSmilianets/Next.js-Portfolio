// src/components/cv/CVDocument.tsx
import React, { ReactElement } from 'react';
import {
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  DocumentProps
} from '@react-pdf/renderer';

import { CVData } from '@/interfaces';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5Q.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Roboto'
  },
  section: {
    marginBottom: 10
  },
  heading: {
    fontSize: 18,
    marginBottom: 5
  },
  subheading: {
    fontSize: 14,
    marginBottom: 3,
    fontWeight: 'bold'
  },
  paragraph: {
    marginBottom: 5
  }
});

// ✅ Now correctly typed to return a <Document>
export const CVDocument = ({ data }: { data: CVData }): ReactElement<DocumentProps> => (
  <>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.heading}>{data.personalInfo.name}</Text>
        <Text>{data.personalInfo.email} | {data.personalInfo.phone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Summary</Text>
        <Text style={styles.paragraph}>{data.personalInfo.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Skills</Text>
        {/* Example rendering skillStack */}
        <Text style={styles.paragraph}>{data.skills.skillStack.join(', ')}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Experience</Text>
        {data.companies.map(company => (
          <Text key={company.id} style={styles.paragraph}>
            {company.companyName} - {company.position}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Education</Text>
        <Text style={styles.paragraph}>
          {data.personalInfo.education} - {data.personalInfo.educationPlace}
        </Text>
      </View>
    </Page>
  </>
);
