import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

// Default client (Server-side bypass or unauthenticated)
export const supabase = createClient(supabaseUrl, supabaseKey);

// Client with User context for RLS
export const createAuthClient = (req: Request) => {
    const authHeader = req.headers.get('Authorization');
    return createClient(supabaseUrl, supabaseKey, {
        global: {
            headers: {
                Authorization: authHeader || '',
            },
        },
    });
};
