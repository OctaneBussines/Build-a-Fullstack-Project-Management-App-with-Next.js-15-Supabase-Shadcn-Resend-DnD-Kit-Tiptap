'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import { Header } from '@/components/Header';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}> 
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem> 
                <div className="min-h-screen flex flex-col">
                    <Header /> 
                    <main className="flex-1 pt-16">
                        {children} 
                    </main>
                </div>
            </ThemeProvider> 
            <Toaster position="top-right" /> 
            <ReactQueryDevtools initialIsOpen={false} /> 
        </QueryClientProvider>
    );
};