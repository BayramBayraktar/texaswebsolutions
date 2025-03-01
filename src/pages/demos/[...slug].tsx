// pages/demos/[...slug].js
import { useRouter } from 'next/router';
import PlumperPage from '@/containers/Plumper';
import PlumperAbout from '@/containers/Plumper/about'; // Assuming you have this component

const demos = {
  plumper: {
    index: PlumperPage,
    about: PlumperAbout,
    // Add more sub-routes as needed
  },
  demo2: {
    index: () => <h1>Demo 2 İçeriği</h1>,
    // Add sub-routes for demo2 if needed
  },
};

export default function DemoPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Handle case when router.query isn't populated yet
  if (!slug) return null;
  
  // First element in the slug array is the demo name
  // Second element (if exists) is the sub-route
  const [demo, subRoute = 'index'] = Array.isArray(slug) ? slug : [slug];
  
  // Get the demo object
  const demoObj = demos[demo];
  
  // If demo exists, try to get the component for the subRoute
  const Component = demoObj ? demoObj[subRoute] : null;
  
  return Component ? <Component /> : <h1>Demo Bulunamadı</h1>;
}