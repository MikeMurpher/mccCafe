import toast, { ToastBar, Toaster } from 'react-hot-toast';

export function CustomToaster() {
  return (
    <Toaster
      toastOptions={{
        duration: Infinity,
        success: {
          style: {
            background: 'green',
            color: 'white',
          },
        },
        error: {
          style: {
            background: 'red',
            color: 'white',
          },
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              <div
                aria-label="Close Notification"
                style={{ cursor: 'pointer' }}
                onClick={() => toast.dismiss(t.id)}
              >
                {icon}
              </div>
              {message}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
