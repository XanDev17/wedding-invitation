import { Hono } from "hono";
import { Env } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    /**
     * RSVP Submission Endpoint
     * Simulates saving a guest's response
     */
    app.post('/api/rsvp', async (c) => {
        try {
            const body = await c.req.json();
            // Basic Validation
            if (!body.name || !body.attending) {
                return c.json({ success: false, error: 'Missing required fields' }, 400);
            }
            // Simulate database latency
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Log response for "storage" simulation
            console.log(`[RSVP RECEIVED] ${body.name} (${body.attending}): ${body.guests || 0} guests`);
            return c.json({ 
                success: true, 
                message: 'RSVP submitted successfully',
                receivedAt: new Date().toISOString() 
            });
        } catch (error) {
            console.error('RSVP Processing Error:', error);
            return c.json({ success: false, error: 'Failed to process RSVP' }, 500);
        }
    });
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'Wedding API Active' }}));
}