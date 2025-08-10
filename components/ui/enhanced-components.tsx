import React from 'react';
import { cn } from '../../lib/utils/classNames';

// Enhanced Button Component
interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-light focus:ring-brand-primary',
    secondary: 'bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    ghost: 'bg-transparent text-foreground border border-transparent hover:bg-muted hover:border-border focus:ring-brand-primary'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg'
  };
  
  const enhancedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    'hover-float focus-ring',
    className
  );
  
  return (
    <button className={enhancedClasses} {...props}>
      {children}
    </button>
  );
};

// Enhanced Card Component
interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  interactive = false,
  onClick
}) => {
  const baseClasses = 'bg-card border border-border rounded-lg p-6 transition-all duration-300 ease-in-out';
  const interactiveClasses = interactive ? 'card-interactive cursor-pointer' : '';
  
  const enhancedClasses = cn(
    baseClasses,
    interactiveClasses,
    'card',
    className
  );
  
  return (
    <div className={enhancedClasses} onClick={onClick}>
      {children}
    </div>
  );
};

// Enhanced Input Component
interface EnhancedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const EnhancedInput: React.FC<EnhancedInputProps> = ({
  label,
  error,
  className,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'form-input',
          error && 'error-shake border-error',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-error text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

// Enhanced Feature List Component
interface FeatureItem {
  text: string;
  icon?: React.ReactNode;
}

interface EnhancedFeatureListProps {
  features: FeatureItem[];
  className?: string;
}

export const EnhancedFeatureList: React.FC<EnhancedFeatureListProps> = ({
  features,
  className
}) => {
  return (
    <ul className={cn('feature-list space-y-3', className)}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3">
          {feature.icon && (
            <span className="flex-shrink-0 mt-1">{feature.icon}</span>
          )}
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
  );
};

// Enhanced Image Component
interface EnhancedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  overlay?: boolean;
  className?: string;
}

export const EnhancedImage: React.FC<EnhancedImageProps> = ({
  overlay = false,
  className,
  ...props
}) => {
  const baseClasses = 'transition-all duration-300 ease-in-out';
  const enhancedClasses = cn(
    baseClasses,
    overlay ? 'image-overlay' : 'image-hover',
    className
  );
  
  return (
    <div className={enhancedClasses}>
      <img {...props} className="w-full h-auto" alt={props.alt || "Enhanced image"} />
    </div>
  );
};

// Enhanced Navigation Link Component
interface EnhancedNavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export const EnhancedNavLink: React.FC<EnhancedNavLinkProps> = ({
  href,
  children,
  active = false,
  className
}) => {
  const baseClasses = 'nav-link transition-colors duration-300 ease-in-out';
  const activeClasses = active ? 'active' : '';
  
  const enhancedClasses = cn(
    baseClasses,
    activeClasses,
    className
  );
  
  return (
    <a href={href} className={enhancedClasses}>
      {children}
    </a>
  );
};

// Enhanced Loading Component
interface EnhancedLoadingProps {
  type?: 'spinner' | 'dots';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  type = 'spinner',
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  if (type === 'dots') {
    return (
      <div className={cn('loading-dots', sizeClasses[size], className)} />
    );
  }
  
  return (
    <div className={cn('loading-spinner', sizeClasses[size], className)} />
  );
};

// Enhanced Tooltip Component
interface EnhancedTooltipProps {
  children: React.ReactNode;
  tooltip: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const EnhancedTooltip: React.FC<EnhancedTooltipProps> = ({
  children,
  tooltip,
  position = 'top',
  className
}) => {
  return (
    <div 
      className={cn('tooltip inline-block', className)}
      data-tooltip={tooltip}
      data-position={position}
    >
      {children}
    </div>
  );
};

// Enhanced Container Component
interface EnhancedContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const EnhancedContainer: React.FC<EnhancedContainerProps> = ({
  children,
  className,
  maxWidth = 'lg'
}) => {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  };
  
  const enhancedClasses = cn(
    'container-max mx-auto px-4 sm:px-6 lg:px-8',
    maxWidthClasses[maxWidth],
    className
  );
  
  return (
    <div className={enhancedClasses}>
      {children}
    </div>
  );
};

// Enhanced Section Component
interface EnhancedSectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'none' | 'muted' | 'card';
}

export const EnhancedSection: React.FC<EnhancedSectionProps> = ({
  children,
  className,
  padding = 'lg',
  background = 'none'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };
  
  const backgroundClasses = {
    none: '',
    muted: 'bg-muted',
    card: 'bg-card'
  };
  
  const enhancedClasses = cn(
    'w-full relative',
    paddingClasses[padding],
    backgroundClasses[background],
    className
  );
  
  return (
    <section className={enhancedClasses}>
      {children}
    </section>
  );
};
