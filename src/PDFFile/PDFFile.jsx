import { Page, Image, Document, StyleSheet, Text } from '@react-pdf/renderer';
import certificateImg from '../img/certificate.jpeg';
import PropType from 'prop-types';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    img: {
        objectFit: 'cover',
        height: '99%',
    },
    name: {
        width: '100%',
        color: '#bd8e36',
        fontSize: '42px',
        position: 'absolute',
        top: '53%',
        right: '0%',
        transform: 'translateY(-50%)',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});

// Create Document Component
const PDFFile = ({ name }) => (
    // <PDFViewer style={{ width: '100vw', height: '100vh' }}>
    <Document>
        <Page size='A4' style={styles.page} orientation='landscape'>
            <Image src={certificateImg} style={styles.img} />
            <Text style={styles.name}>{name}</Text>
        </Page>
    </Document>
    // </PDFViewer>
);

PDFFile.propTypes = {
    name: PropType.string.isRequired,
}

export default PDFFile;