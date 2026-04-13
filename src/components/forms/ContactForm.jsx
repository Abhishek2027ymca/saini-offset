import { useState } from 'react';
import { colors } from '../../assets/colors';
import FormInput from '../ui/FormInput';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Add Formspree endpoint
      // const response = await fetch('https://formspree.io/f/YOUR_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Form submitted:', formData);
      
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setFormSubmitted(false), 4000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Your full name"
      />

      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="your@email.com"
      />

      <FormInput
        label="Message"
        type="text"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Tell us about your printing needs..."
        rows={5}
      />

      <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>

      {formSubmitted && (
        <div
          style={{
            backgroundColor: colors.successLight,
            color: colors.success,
            padding: '12px',
            borderRadius: '8px',
            fontSize: '14px',
            textAlign: 'center',
            fontWeight: '600'
          }}
        >
          ✓ Message sent successfully!
        </div>
      )}
    </form>
  );
} 